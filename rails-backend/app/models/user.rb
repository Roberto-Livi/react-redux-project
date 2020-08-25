class User < ApplicationRecord
    validates_uniqueness_of :name
    has_many :images
end