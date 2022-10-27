class User < ApplicationRecord
    has_many :classifieds
    has_many :events
    has_many :services
    has_many :hotdogs
    has_many :comments
  
    validates :name, presence: true
    validates :name, uniqueness: true
    validates :email, presence: true
    validates :email, format: { with: /\A([^@\s]+)@((?:[-a-z0-9]+\.)+[a-z]{2,})\z/i }
    validates :email, uniqueness: true

    has_secure_password
    validates :password, confirmation: true
    validates :password_confirmation, presence: true
    
    
end
