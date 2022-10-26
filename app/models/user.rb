class User < ApplicationRecord
    has_many :classifieds
    has_many :events
    has_many :services
    has_many :hotdogs
    has_many :comments
  

    has_secure_password
    validates :password, confirmation: true
    validates :password_confirmation, presence: true
    validates :email, format: { with: /\A([^@\s]+)@((?:[-a-z0-9]+\.)+[a-z]{2,})\z/i }
    validates :email, :name, presence: true
    validates :email, :name, uniqueness: true
end
