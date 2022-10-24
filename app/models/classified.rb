class Classified < ApplicationRecord
    has_many :user_classifieds
    has_many :users, through: :user_classifieds
end
