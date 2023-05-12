require 'rails_helper'

RSpec.feature 'swagger-ui', js: true do
  scenario 'browsing api' do
    # skip "Needs work to run on others' machines"
    visit '/api'

    expect(page).to have_content('GET /boats Retrieves a list of boats', normalize_ws: true)
    expect(page).to have_content('POST /blogs Creates a boat', normalize_ws: true)
    expect(page).to have_content('GET /boats/{id} Retrieves a boat', normalize_ws: true)
  end
end