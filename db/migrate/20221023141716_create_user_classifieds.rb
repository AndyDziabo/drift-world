class CreateUserClassifieds < ActiveRecord::Migration[7.0]
  def change
    create_table :user_classifieds do |t|
      t.boolean :created_by
      t.string :liked_boolean
      t.belongs_to :user, null: false, foreign_key: true
      t.belongs_to :classified, null: false, foreign_key: true

      t.timestamps
    end
  end
end
