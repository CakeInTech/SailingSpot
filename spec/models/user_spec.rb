require 'rails_helper'

RSpec.describe User, type: :model do
  context 'validations' do
    it 'requires name to be present' do
      user = User.new(name: nil)
      expect(user).not_to be_valid
      expect(user.errors[:name]).to include("can't be blank")
    end
  end
end
