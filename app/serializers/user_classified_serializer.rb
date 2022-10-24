class UserClassifiedSerializer < ActiveModel::Serializer
  attributes :id, :created_by, :liked_boolean
  has_one :user
  has_one :classified
end
