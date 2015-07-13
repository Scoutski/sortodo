class AddFilenameToTasks < ActiveRecord::Migration
  def change
    add_column :tasks, :filename, :string
  end
end
