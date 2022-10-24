class UserEventSerializer < ActiveModel::Serializer
  attributes :id, :created_by, :liked
  has_one :user
  has_one :event
end
