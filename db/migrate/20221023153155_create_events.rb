class CreateEvents < ActiveRecord::Migration[7.0]
  def change
    create_table :events do |t|
      t.string :name
      t.datetime :date
      t.string :location
      t.integer :entry_fee
      t.string :description
      t.string :image

      t.timestamps
    end
  end
end
