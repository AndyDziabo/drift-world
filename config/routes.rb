Rails.application.routes.draw do
  resources :hotdogs, only: [:index, :show, :create, :update, :destroy]
  resources :comments, only: [:index, :show, :create, :update, :destroy]
  resources :services, only: [:index, :show, :create, :update, :destroy]
  resources :events, only: [:index, :show, :create, :update, :destroy]
  resources :classifieds, only: [:index, :show, :create, :update, :destroy]
  resources :users, only: [:create, :show]

  post "/signup", to: "users#create"
  get "/me", to: "users#show"
  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"

  get "user_ads", to: "users#user_ads"
  get "user_events", to: "users#user_events"
  get "user_services", to: "users#user_services"
  get "user_hotdogs", to: "users#user_hotdogs"

end
