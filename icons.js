// Aion 2 Asesino — official icons from metabot.gg (downloaded locally)
// Verified by research agent: 24/24 URLs returned HTTP 200 WebP
// Local hosting avoids CORS/hotlink issues

const ICON_FILES = {
  // DPS Core
  heart: 'heart_gore.webp',
  quick: 'quick_slice.webp',
  insignia: 'insignia_explosion.webp',
  ambush: 'ambush.webp',

  // AoE / Combo
  savage: 'savage_roar.webp',
  storm: 'storm_rampage.webp',
  whirl: 'whirlwind_slice.webp',

  // Movement
  shadow: 'shadowstrike.webp',
  flash: 'flash_slice.webp',
  infiltrate: 'infiltrate.webp',
  shadowfall: 'shadow_fall.webp',

  // Defense
  defiance: 'defiance.webp',

  // Passives
  rear: 'rear_smite.webp',
  exploit: 'exploit_weakness.webp',
  assault: 'assault_stance.webp',
  impact: 'impact_hit.webp',
  poison: 'apply_poison.webp',
  sixthsense: 'sixth_sense.webp',
  ambushstance: 'ambush_stance.webp',
  defbreak: 'defense_break.webp',

  // Stigmas
  s_clone: 'illusive_clone.webp',
  s_swift: 'swift_contract.webp',
  s_triniel: 'triniels_dagger.webp',
  s_fang: 'savage_fang.webp',
  s_shadowblade: 'throw_shadowblade.webp',
};

// Fallback Unicode glyphs if image fails
const FALLBACK_GLYPHS = {
  heart: '❤', quick: '⚔', insignia: '💥', ambush: '🥷',
  savage: '🦁', storm: '🌪', whirl: '🌀',
  shadow: '🗡', flash: '⚡', infiltrate: '👤', shadowfall: '🌑',
  defiance: '🛡',
  rear: '🎯', exploit: '🔍', assault: '⚔', impact: '💢',
  poison: '☠', sixthsense: '👁', ambushstance: '🥷', defbreak: '🛡',
  s_clone: '👥', s_swift: '📜', s_triniel: '🗡', s_fang: '🦷', s_shadowblade: '🏹',
};

function renderIcon(key, size) {
  const file = ICON_FILES[key];
  const fallback = FALLBACK_GLYPHS[key] || '?';
  const sz = size || 48;
  if (!file) {
    return `<span class="aion-icon fallback" style="width:${sz}px;height:${sz}px">${fallback}</span>`;
  }
  return `<img src="icons/${file}" alt="${key}" class="aion-icon-img" width="${sz}" height="${sz}" loading="lazy"
    onerror="this.outerHTML='<span class=\\'aion-icon fallback\\' style=\\'width:${sz}px;height:${sz}px\\'>${fallback}</span>'">`;
}

// Replace all placeholder icon containers in the page
function applyIcons() {
  document.querySelectorAll('[data-icon]').forEach(el => {
    const key = el.dataset.icon;
    const size = parseInt(el.dataset.size || '48', 10);
    el.innerHTML = renderIcon(key, size);
    el.classList.add('iconized');
  });
}

window.renderIcon = renderIcon;
window.ICON_FILES = ICON_FILES;
document.addEventListener('DOMContentLoaded', applyIcons);
