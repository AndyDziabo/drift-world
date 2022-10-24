class CreateServices < ActiveRecord::Migration[7.0]
  def change
    create_table :services do |t|
      t.string :title
      t.string :location
      t.string :description
      t.string :image

      t.timestamps
    end
  end
end
