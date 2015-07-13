# == Route Map
#
#        Prefix Verb   URI Pattern                   Controller#Action
#     notebooks GET    /notebooks(.:format)          notebooks#index
#               POST   /notebooks(.:format)          notebooks#create
#  new_notebook GET    /notebooks/new(.:format)      notebooks#new
# edit_notebook GET    /notebooks/:id/edit(.:format) notebooks#edit
#      notebook GET    /notebooks/:id(.:format)      notebooks#show
#               PATCH  /notebooks/:id(.:format)      notebooks#update
#               PUT    /notebooks/:id(.:format)      notebooks#update
#               DELETE /notebooks/:id(.:format)      notebooks#destroy
#          root GET    /                             pages#index
#         login GET    /login(.:format)              session#new
#               POST   /login(.:format)              session#create
#               DELETE /login(.:format)              session#destroy
#         users POST   /users(.:format)              users#create
#      new_user GET    /users/new(.:format)          users#new
#     edit_user GET    /users/:id/edit(.:format)     users#edit
#          user PATCH  /users/:id(.:format)          users#update
#               PUT    /users/:id(.:format)          users#update
#               DELETE /users/:id(.:format)          users#destroy
#

Rails.application.routes.draw do
  
  root :to => 'pages#index'

  get '/login' => 'session#new'
  post '/login' => 'session#create'
  delete '/login' => 'session#destroy'

  resources :users, :except => [:index, :show]
  resources :notebooks, :except => [:index, :show]
end
