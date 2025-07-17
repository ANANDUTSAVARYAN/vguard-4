export const modules = [
  {
    id: 'ethics',
    name: 'Ethics',
    type: 'Vanguard Core Module',
    sessions: [
      { id: 'lecture', name: 'Lecture', type: 'lecture' },
      { id: 'social', name: 'Social Hour', type: 'social' }
    ]
  },
  {
    id: 'empathy',
    name: 'Empathy',
    type: 'Vanguard Core Module',
    sessions: [
      { id: 'lecture', name: 'Lecture', type: 'lecture' },
      { id: 'social', name: 'Social Hour', type: 'social' }
    ]
  },
  {
    id: 'communication',
    name: 'Communication',
    type: 'Vanguard Core Module',
    sessions: [
      { id: 'lecture', name: 'Lecture', type: 'lecture' },
      { id: 'social', name: 'Social Hour', type: 'social' }
    ]
  },
  {
    id: 'thinking',
    name: 'Thinking',
    type: 'Vanguard Core Module',
    sessions: [
      { id: 'lecture', name: 'Lecture', type: 'lecture' },
      { id: 'social', name: 'Social Hour', type: 'social' }
    ]
  },
  {
    id: 'creativity-innovation',
    name: 'Creativity and Innovation',
    type: 'Vanguard Core Module',
    sessions: [
      { id: 'lecture', name: 'Lecture', type: 'lecture' },
      { id: 'social', name: 'Social Hour', type: 'social' }
    ]
  },
  {
    id: 'the-grand-spectrum',
    name: 'The Grand Spectrum',
    type: 'Vanguard Special Module',
    sessions: [
      { id: 'lecture', name: 'Lecture', type: 'lecture' },
      { id: 'social', name: 'Social Hour', type: 'social' }
    ]
  }
]

// DMRP as a separate session type
export const dmrpSessions = [
  {
    id: 'dmrp',
    name: 'DMRP',
    type: 'DMRP Program',
    description: 'Discipline, Merit, Responsibility Program',
    sessions: [
      { id: 'dmrp-session', name: 'DMRP Session', type: 'dmrp' }
    ]
  }
]

// DexConnect and Retraining as combined session
export const specialSessions = [
  {
    id: 'dexconnect-retraining',
    name: 'DexConnect Meetup & Retraining Program',
    type: 'Special Programs',
    description: 'Combined DexConnect meetups and retraining sessions',
    sessions: [
      { id: 'dexconnect-retraining', name: 'DexConnect & Retraining', type: 'dexconnect-retraining' }
    ]
  }
]