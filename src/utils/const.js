export const LEVEL_MAP = {
  Common: '普通',
  Magical: '魔法',
  Rare: '稀有',
  Epic: '史诗',
  Legendary: '传奇',
}

// itemSkills.sk2784

// const WEAPON_MAP = {
//   Sword: '单手剑',
//   Axe: '单手斧',
//   Blunt: '单手锤',
//   Caster: '匕首',
//   Gun: '单手远程武器',
//   Shield: '盾牌',
//   Focus: '副手',
//   Melee2h: '双手剑',
//   Gun2h: '双手远程武器',
//   // Caster: '单手权杖'
// }

// const ITEM_SKILL_MAP = {
//   Skill_AttackWeapon: '攻击时有 {%d0}% 的几率施放该技能',
//   Skill_AttackProjectileAreaEffect: '(杀死怪物时有 {%d0}% 的几率施放该技能)',
//   Skill_BuffSelfDuration: '',
//   Skill_AttackProjectile: '',
//   Skill_AttackWeapon
// }

export const getSkills = (bean) => {
  const arr = []
  if (bean.augmentMasteryName1) {
    arr.push({
      role: db_l10n_texts.zh[bean.augmentMasteryName1],
      level: `+${bean.augmentMasteryLevel1}`,
      all: true,
    })
  }
  if (bean.augmentMasteryName2) {
    arr.push({
      role: db_l10n_texts.zh[bean.augmentMasteryName2],
      level: `+${bean.augmentMasteryLevel2}`,
      all: true,
    })
  }
  if (bean.augmentMasteryName3) {
    arr.push({
      role: db_l10n_texts.zh[bean.augmentMasteryName3],
      level: `+${bean.augmentMasteryLevel3}`,
      all: true,
    })
  }
  if (bean.augmentMasteryName4) {
    arr.push({
      role: db_l10n_texts.zh[bean.augmentMasteryName4],
      level: `+${bean.augmentMasteryLevel4}`,
      all: true,
    })
  }
  if (bean.augmentSkillName1) {
    arr.push({
      role: db_l10n_texts.zh[bean.augmentSkillName1],
      level: `+${bean.augmentSkillLevel1}`,
    })
  }
  if (bean.augmentSkillName2) {
    arr.push({
      role: db_l10n_texts.zh[bean.augmentSkillName2],
      level: `+${bean.augmentSkillLevel2}`,
    })
  }
  if (bean.augmentSkillName3) {
    arr.push({
      role: db_l10n_texts.zh[bean.augmentSkillName3],
      level: `+${bean.augmentSkillLevel3}`,
    })
  }
  if (bean.augmentSkillName4) {
    arr.push({
      role: db_l10n_texts.zh[bean.augmentSkillName4],
      level: `+${bean.augmentSkillLevel4}`,
    })
  }

  return arr
}

// export const getWeaponType(tagName) {
//   if (tagName) {

//   }
// }

export const getItemSkill = (skillId) => {
  if (skillId) {
    const origin = itemSkills[skillId]
    return {
      origin,
      name: db_l10n_texts.zh[origin.skillDisplayName],
      des: db_l10n_texts.zh[origin.skillBaseDescription],
      coolDown: `${origin.skillCooldownTime}秒技能冷却时间`,
      active: `${origin.skillActiveDuration}秒持续时间`,
      // activeLifeCost: `${origin.skillActiveLifeCost[0]}每秒激活生命消耗`,
    }
  }
  return null
}

export const formatBean = bean => ({
  name: db_l10n_texts.zh[bean.a],
  tag: bean.itemStyleTag ? db_l10n_texts.zh[bean.itemStyleTag] : '',
  // weaponType: getWeaponType(bean.a),
  des: db_l10n_texts.zh[bean.b],
  level: LEVEL_MAP[bean.f],
  origin: bean,
  skills: getSkills(bean),
  bgClass: `itemdb-${bean.n.split('.')[0].split('/').join('-')}`,
  itemSkill: getItemSkill(bean.itemSkillName),
})
