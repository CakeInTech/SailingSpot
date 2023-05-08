require 'rails_helper'
require 'shoulda/matchers'

RSpec.describe Boat, type: :model do
  let(:user) { FactoryBot.create(:user) }
  describe "validations" do
    subject { build(:boat) }

    it { should validate_presence_of(:name) }
    it { should validate_presence_of(:model) }
    it { should validate_presence_of(:price) }
    it { should validate_numericality_of(:price).is_greater_than(0) }
    it { should validate_presence_of(:photo) }
    it { should validate_uniqueness_of(:photo) }
    it {should belong_to(:user)}
  end
end
