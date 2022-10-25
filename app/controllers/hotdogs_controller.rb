class HotdogsController < ApplicationController
        
    def index
        render json: Hotdog.all, status: :ok
    end

    def create
        hotdog = @current_user.hotdogs.create!(hotdogs_params)
        render json: hotdog, status: :created
    end

    def update
        hotdog = Hotdog.find(params[:id])
        hotdog.update(hotdogs_params)
        render json: hotdog, status: :accepted
    end

    def destroy
        hotdog = Hotdog.find(params[:id])
        hotdog.destroy
        head :no_content
    end

    private

    def hotdogs_params
        params.permit(:title, :description, :image)
    end
end
