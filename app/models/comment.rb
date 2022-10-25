class Comment < ApplicationRecord
    belongs_to :classified
    belongs_to :user
end
