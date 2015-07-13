class ChangeDefaultsInTasks < ActiveRecord::Migration
  def change
    change_column :tasks, :complete, :boolean, :default => false
    change_column :tasks, :priority, :integer, :default => '4'
  end
end