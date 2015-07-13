# == Schema Information
#
# Table name: tasks
#
#  id          :integer          not null, primary key
#  name        :string
#  due         :datetime
#  location    :string
#  file        :text
#  notebook_id :integer
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#  user_id     :integer
#

class Task < ActiveRecord::Base
  belongs_to :notebook
  has_one :user, :through => :notebook
end
