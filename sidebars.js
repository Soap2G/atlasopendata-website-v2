/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  intro: [
    // 'atlas/lhc',
    {
      type: 'category',
      label: 'Introduction',
      items: [
        'atlas/lhc', 
        'atlas/experiment', 
        'atlas/atlas_events'
      ],
    }],
  data8: [
      {
        type: 'category',
        label: '8 TeV Open Datasets',
        items: [
        '8TeVDoc/overview',
        '8TeVDoc/atlas_events',
        '8TeVDoc/data_and_simulated_data',
        '8TeVDoc/atlas_higgs_animations',
        '8TeVDoc/analyses',
        '8TeVDoc/gettingstarted',
        '8TeVDoc/take_a_look_at_the_data',
        '8TeVDoc/take_a_closer_look',
        '8TeVDoc/histograms',
        '8TeVDoc/more_histograms',
        '8TeVDoc/create-a-new-plot',
        '8TeVDoc/event_selection',
        '8TeVDoc/variable_names',
        '8TeVDoc/glossary',
        '8TeVDoc/simulated_data_details',
        ],
      }],
  data13: [
    {
      type: 'category',
      label: '13 TeV Open Datasets',
      items: [
        'datasets/index',
        'datasets/intro',
        'datasets/objects',
        'datasets/dataset13',
        'datasets/mc',
        'datasets/files',
        'datasets/capabilities',
        'datasets/limitations',
        'datasets/evolution'
      ],
    }],
  physicsexamples: [
    {
      type: 'category',
      label: 'Physics analysis examples',
      items: [
        'physics/intro',
        'physics/the-higgs-boson',
        'physics/SL1',
        'physics/SL2',
        'physics/SL3',
        'physics/DL1',
        'physics/DL2',
        'physics/DL3',
        'physics/TL1',
        'physics/FL1',
        'physics/FL2',
        'physics/TT',
        'physics/SLB',
        'physics/YY'
      ],
    }
  ]
};

module.exports = sidebars;
