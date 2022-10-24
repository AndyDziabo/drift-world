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

ActiveRecord::Schema[7.0].define(version: 2022_10_23_155352) do
  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "classifieds", force: :cascade do |t|
    t.string "title"
    t.integer "price"
    t.string "location"
    t.string "description"
    t.string "image"
    t.boolean "category"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "events", force: :cascade do |t|
    t.string "name"
    t.datetime "date"
    t.string "location"
    t.integer "entry_fee"
    t.string "description"
    t.string "image"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "services", force: :cascade do |t|
    t.string "title"
    t.string "location"
    t.string "description"
    t.string "image"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "user_classifieds", force: :cascade do |t|
    t.boolean "created_by"
    t.string "liked_boolean"
    t.bigint "user_id", null: false
    t.bigint "classified_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["classified_id"], name: "index_user_classifieds_on_classified_id"
    t.index ["user_id"], name: "index_user_classifieds_on_user_id"
  end

  create_table "user_events", force: :cascade do |t|
    t.boolean "created_by"
    t.boolean "liked"
    t.bigint "user_id", null: false
    t.bigint "event_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["event_id"], name: "index_user_events_on_event_id"
    t.index ["user_id"], name: "index_user_events_on_user_id"
  end

  create_table "user_services", force: :cascade do |t|
    t.boolean "created_by"
    t.boolean "liked"
    t.bigint "user_id", null: false
    t.bigint "service_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["service_id"], name: "index_user_services_on_service_id"
    t.index ["user_id"], name: "index_user_services_on_user_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "name"
    t.string "email"
    t.string "password_digest"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  add_foreign_key "user_classifieds", "classifieds"
  add_foreign_key "user_classifieds", "users"
  add_foreign_key "user_events", "events"
  add_foreign_key "user_events", "users"
  add_foreign_key "user_services", "services"
  add_foreign_key "user_services", "users"
end
