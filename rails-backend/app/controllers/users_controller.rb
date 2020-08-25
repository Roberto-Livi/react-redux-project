class UsersController < ApplicationController

    def index
        users = User.all
        options = {
            include: [:images]
        }
        render json: UserSerializer.new(users, options)
    end

    def show
        user = User.find_by(id: params[:id])
        options = {
            include: [:images]
        }
        render json: UserSerializer.new(user, options)
    end

    def create
        user = User.find_or_create_by(:name => params[:_json])
        render json: user
    end

    def update
        user = User.find(params[:id])
        if user
            image = Image.find_or_create_by(:image => params[:_json], :user_id => params[:id])
        end
        render json: image
    end

    def destroy
        user = User.find(params[:id])
        if user
            Image.delete(user.images.find{|img| img.image == params[:_json] }.id)
        end
        render json: image
    end

end