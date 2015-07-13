# == Schema Information
#
# Table name: taggings
#
#  id         :integer          not null, primary key
#  task_id    :integer
#  tag_id     :integer
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

# I learned how to set up a simple tags system with this tutorial:
# http://www.sitepoint.com/tagging-scratch-rails/

class Tagging < ActiveRecord::Base
  belongs_to :task
  belongs_to :tag
end
