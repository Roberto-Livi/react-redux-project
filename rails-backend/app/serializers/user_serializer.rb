class UserSerializer
    include FastJsonapi::ObjectSerializer
    has_many :images
    attributes :name
end