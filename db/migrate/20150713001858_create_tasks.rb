class CreateTasks < ActiveRecord::Migration
  def change
    create_table :tasks do |t|
      t.string :name
      t.datetime :due
      t.string :location
      t.text :file
      t.integer :notebook_id

      t.timestamps null: false
    end
  end
end
