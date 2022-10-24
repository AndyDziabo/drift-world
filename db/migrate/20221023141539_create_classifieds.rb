class CreateClassifieds < ActiveRecord::Migration[7.0]
  def change
    create_table :classifieds do |t|
      t.string :title
      t.integer :price
      t.string :location
      t.string :description
      t.string :image
      t.boolean :category

      t.timestamps
    end
  end
end
