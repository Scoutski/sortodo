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

class Notebook < ActiveRecord::Base
  belongs_to :user
  has_many :tasks
end
