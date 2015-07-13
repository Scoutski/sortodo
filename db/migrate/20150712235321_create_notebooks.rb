class CreateNotebooks < ActiveRecord::Migration
  def change
    create_table :notebooks do |t|
      t.string :name
      t.string :color
      t.integer :user_id

      t.timestamps null: false
    end
  end
end
