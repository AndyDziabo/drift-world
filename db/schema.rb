# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema[7.0].define(version: 2022_10_25_011519) do
  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "classifieds", force: :cascade do |t|
    t.string "title"
    t.integer "price"
    t.string "location"
    t.text "description"
    t.string "image"
    t.boolean "category"
    t.bigint "user_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["user_id"], name: "index_classifieds_on_user_id"
  end

  create_table "comments", force: :cascade do |t|
    t.text "comment"
    t.bigint "user_id", null: false
    t.bigint "classified_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["classified_id"], name: "index_comments_on_classified_id"
    t.index ["user_id"], name: "index_comments_on_user_id"
  end

  create_table "events", force: :cascade do |t|
    t.string "name"
    t.datetime "date"
    t.string "location"
    t.integer "entry_fee"
    t.text "description"
    t.string "image"
    t.bigint "user_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["user_id"], name: "index_events_on_user_id"
  end

  create_table "media", force: :cascade do |t|
    t.string "title"
    t.text "description"
    t.string "image"
    t.bigint "user_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["user_id"], name: "index_media_on_user_id"
  end

  create_table "services", force: :cascade do |t|
    t.string "title"
    t.string "location"
    t.text "description"
    t.string "image"
    t.bigint "user_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["user_id"], name: "index_services_on_user_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "name"
    t.string "email"
    t.string "password_digest"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  add_foreign_key "classifieds", "users"
  add_foreign_key "comments", "classifieds"
  add_foreign_key "comments", "users"
  add_foreign_key "events", "users"
  add_foreign_key "media", "users"
  add_foreign_key "services", "users"
end
