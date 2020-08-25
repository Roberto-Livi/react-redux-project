class ImageSerializer
    include FastJsonapi::ObjectSerializer
    attributes :image
    belongs_to :user
end