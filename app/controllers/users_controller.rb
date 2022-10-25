class UsersController < ApplicationController
    skip_before_action :authorize, only: :create

    def create
      user = User.create!(user_params)
      session[:user_id] = user.id
      render json: user, status: :created
    end
  
    def show
      render json: @current_user
    end

    def user_ads
      render json: @current_user.classifieds, status: :ok
    end

    def user_events
      render json: @current_user.events, status: :ok
    end

    def user_services
      render json: @current_user.services, status: :ok
    end

    def user_hotdogs
      render json: @current_user.hotdogs, status: :ok
    end
  
    private
  
    def user_params
      params.permit(:name, :email, :password, :password_confirmation)
    end
  
end
