class CreateClassifieds < ActiveRecord::Migration[7.0]
  def change
    create_table :classifieds do |t|
      t.string :title
      t.integer :price
      t.string :location
      t.text :description
      t.string :image
      t.boolean :category
      t.belongs_to :user, null: false, foreign_key: true
      
      t.timestamps
    end
  end
end
