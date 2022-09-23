import { supabaseWithConnectionParams } from '../../src/supabaseClientWithConnectionParams'

describe('Landing page', () => {
	beforeEach(async () => {
		const sb = supabaseWithConnectionParams(Cypress.env('NEXT_PUBLIC_SUPABASE_URL'), Cypress.env('NEXT_PUBLIC_SUPABASE_ANON_KEY'))
		 const { data, error } = await sb.auth.api.listUsers()
		 if(error) return

 		data?.forEach(user => {
			sb.auth.api.deleteUser(user.id)
		})

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

	it('can log out after signing up', () => {
    cy.visit('localhost:3000')
		cy.contains('Sign up').click()
		cy.get('[name="firstName"]').type('Test')
		cy.get('[name="email"]').type('test@test.com')
		cy.get('[name="password"]').type('testtest')
		cy.contains('Submit').click()
		cy.contains("its' a dashboard").should('exist')
		cy.get('[data-testid="MenuIcon"]').click()
		cy.contains('Logout').click()
		cy.contains("its' a dashboard").should('not.exist')
		cy.contains("Yet Another Link Shortener").should('exist')
	})
})
