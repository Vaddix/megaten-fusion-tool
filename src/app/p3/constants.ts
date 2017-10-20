import { NormalFusionCalculator } from '../compendium/models/normal-fusion-calculator';

import { fuseWithDiffRace } from '../compendium/fusions/smt-nonelem-fusions';
import { fuseWithSameRace } from '../compendium/fusions/per-nonelem-fusions';

import { splitWithDiffRace } from '../compendium/fusions/smt-nonelem-fissions';
import { splitWithSameRace } from '../compendium/fusions/per-nonelem-fissions';

export const Races = [
  'Fool',       'Magician', 'Priestess', 'Empress', 'Emperor',
  'Hierophant', 'Lovers',   'Chariot',   'Justice', 'Hermit',
  'Fortune',    'Strength', 'Hanged',    'Death',   'Temperance',
  'Devil',      'Tower',    'Star',      'Moon',    'Sun',
  'Judgement',  'Aeon'
];

export const ElementDemons = [];

export const ResistElements = [
  'slash', 'strike', 'pierce',
  'fire',  'ice',    'elec',   'wind',
  'light', 'dark'
];

export const SkillElements = ResistElements.concat(
  'lidark',  'almighty', 'ailment', 'recovery',
  'support', 'special',  'all',     'passive'
);

export const BaseStats = [
  'st', 'ma', 'en', 'ag', 'lu'
];

export const ResistCodes = {
  w: 'wk',
  '-': 'no',
  s: 'rs',
  n: 'nu',
  r: 'rp',
  d: 'ab'
};

export const RaceOrder = Races.reduce((acc, race, i) => { acc[race] = i; return acc; }, {});
export const ElementOrder = SkillElements.reduce((acc, elem, i) => { acc[elem] = i; return acc; }, {});

export const P3_NORMAL_FUSION_CALCULATOR = new NormalFusionCalculator(
  [ fuseWithDiffRace, fuseWithSameRace ],
  [ ]
);

export const P3_NORMAL_FISSION_CALCULATOR = new NormalFusionCalculator(
  [ splitWithDiffRace, splitWithSameRace ],
  [ ]
);

export const FUSION_SETTINGS_KEY = 'p3-fusion-tool-settings';
export const FUSION_SETTINGS_VERSION = 1709211400;
export const APP_TITLE = 'Persona 3';