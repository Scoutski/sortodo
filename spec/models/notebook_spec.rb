# == Schema Information
#
# Table name: notebooks
#
#  id         :integer          not null, primary key
#  name       :string
#  color      :string
#  user_id    :integer
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

require 'rails_helper'

RSpec.describe Notebook, type: :model do
  pending "add some examples to (or delete) #{__FILE__}"
end
