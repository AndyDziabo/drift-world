class User < ApplicationRecord
    has_many :user_classifieds
    has_many :user_events
    has_many :user_services
    has_many :classifieds, through: :user_classifieds
    has_many :events, through: :user_events
    has_many :services, through: :user_services

    has_secure_password
    validates :password, confirmation: true
    validates :password_confirmation, presence: true
end
