class UserClassified < ApplicationRecord
  belongs_to :user
  belongs_to :classified
end
