import { ExternalLink } from './app/about/about.component'

export type LegalSystem = 'england' | 'bavaria'
export type Language = 'en' | 'de'

// In each component, define the things we can select using string literal types.
// These are used to create an algebraic data type which can be used in the view component.
export type Selectable = ExternalLink