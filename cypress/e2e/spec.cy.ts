import { supabase } from '../../src/supabaseClient'

describe('Landing page', () => {
	afterEach(async () => {
		const sb = supabase(Cypress.env('NEXT_PUBLIC_SUPABASE_URL'), Cypress.env('NEXT_PUBLIC_SUPABASE_ANON_KEY'))
		const { data, error } = await sb.auth.api.listUsers()

		console.log('aorsitenarostn', data, error)

	})

  it('loads with 2XX status', () => {
    cy.visit('localhost:3000')
  })

	it('shows dashboard page after signing up', () => {
    cy.visit('localhost:3000')
		cy.contains('Sign up').click()
		cy.get('[name="firstName"]').type('Test')
		cy.get('[name="email"]').type('test@test.com')
		cy.get('[name="password"]').type('testtest')
		cy.contains('Submit').click()
		cy.contains("its' a dashboard").should('exist')
	})
})
