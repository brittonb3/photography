Rails.application.routes.draw do

  devise_for :admin_users, ActiveAdmin::Devise.config
  ActiveAdmin.routes(self)
  devise_for :users
  resources :posts
  resources :contacts, only: [:new, :create]

  get 'about' => 'welcome#about'
  get 'portfolio' => 'welcome#portfolio'
  get 'prints' => 'welcome#prints'

  root 'welcome#index'

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
