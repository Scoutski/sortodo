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
  has_many :taggings
  has_many :tags, through: :taggings

  # def all_tags=(names)
  #   self.tags = names.split(",").map do |name|
  #       Tag.where(name: name.strip).first_or_create!
  #   end
  # end
   
  # def all_tags
  #   self.tags.map(&:name).join(", ")
  # end
end
