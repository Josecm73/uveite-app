// ===== AUTH.JS — Login + Trial — UveíteApp =====

const SUPABASE_URL = 'https://mdopzhcehbcffxzlbrlh.supabase.co';
const SUPABASE_KEY = 'sb_publishable_3KcX36D7DbnxpK04ehcbPA_yxjoFA4x';
const TRIAL_DAYS = 7;

const sb = window.supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

let currentUser = null;
let currentProfile = null;

async function initAuth(){
  const { data: { session } } = await sb.auth.getSession();
  if(session){
    currentUser = session.user;
    await loadProfile();
  }
  renderAuthState();

  sb.auth.onAuthStateChange(async (event, session)=>{
    if(session){
      currentUser = session.user;
      await loadProfile();
    } else {
      currentUser = null;
      currentProfile = null;
    }
    renderAuthState();
  });
}

async function loadProfile(){
  if(!currentUser) return;
  const { data, error } = await sb.from('profiles').select('*').eq('id', currentUser.id).single();
  if(!error) currentProfile = data;
}

function getTrialStatus(){
  if(!currentProfile) return { active:false, daysLeft:0, expired:true };
  if(currentProfile.is_subscribed) return { active:true, daysLeft:null, expired:false, subscribed:true };
  const started = new Date(currentProfile.trial_started_at);
  const now = new Date();
  const daysPassed = Math.floor((now - started) / (1000*60*60*24));
  const daysLeft = TRIAL_DAYS - daysPassed;
  return { active: daysLeft > 0, daysLeft, expired: daysLeft <= 0 };
}

function renderAuthState(){
  const loginOverlay = document.getElementById('auth-login-overlay');
  const paywallOverlay = document.getElementById('auth-paywall-overlay');
  const appRoot = document.getElementById('app-root');
  const trialBadge = document.getElementById('trial-badge');

  if(!currentUser){
    loginOverlay.style.display = 'flex';
    paywallOverlay.style.display = 'none';
    appRoot.style.display = 'none';
    return;
  }

  loginOverlay.style.display = 'none';

  const status = getTrialStatus();
  if(status.expired){
    paywallOverlay.style.display = 'flex';
    appRoot.style.display = 'none';
  } else {
    paywallOverlay.style.display = 'none';
    appRoot.style.display = '';
    if(trialBadge){
      if(status.subscribed){
        trialBadge.textContent = '✓ Premium';
      } else {
        trialBadge.textContent = `Teste: ${status.daysLeft} dia(s) restante(s)`;
      }
    }
  }
}

async function signInWithEmail(email){
  const { error } = await sb.auth.signInWithOtp({
    email,
    options: { emailRedirectTo: window.location.href }
  });
  return error;
}

async function signInWithGoogle(){
  const { error } = await sb.auth.signInWithOAuth({
    provider: 'google',
    options: { redirectTo: window.location.href }
  });
  return error;
}

async function signOutUser(){
  await sb.auth.signOut();
}

async function handleEmailSignIn(){
  const input = document.getElementById('auth-email-input');
  const msg = document.getElementById('auth-msg');
  const email = input.value.trim();
  if(!email || !email.includes('@')){
    msg.textContent = 'Digite um e-mail válido.';
    msg.style.color = '#ff5c5c';
    return;
  }
  msg.textContent = 'Enviando link...';
  msg.style.color = '#8da4bf';
  const error = await signInWithEmail(email);
  if(error){
    msg.textContent = 'Erro ao enviar. Tente novamente.';
    msg.style.color = '#ff5c5c';
  } else {
    msg.textContent = 'Link de acesso enviado! Verifique seu e-mail.';
    msg.style.color = '#00d9b8';
  }
}

async function handleGoogleSignIn(){
  await signInWithGoogle();
}

let selectedPlan = 'annual';

function selectPlan(plan){
  selectedPlan = plan;
  const monthly = document.getElementById('plan-monthly');
  const annual = document.getElementById('plan-annual');
  if(plan === 'monthly'){
    monthly.style.borderColor = '#00d9b8';
    monthly.style.background = 'rgba(0,217,184,.07)';
    annual.style.borderColor = '#1a3a3e';
    annual.style.background = '#0a161a';
  } else {
    annual.style.borderColor = '#00d9b8';
    annual.style.background = 'rgba(0,217,184,.07)';
    monthly.style.borderColor = '#1a3a3e';
    monthly.style.background = '#0a161a';
  }
}

function handleSubscribeClick(){
  const msg = document.getElementById('paywall-msg');
  msg.textContent = 'Pagamento via Google Play em breve — estamos finalizando a integração.';
}

document.addEventListener('DOMContentLoaded', initAuth);
