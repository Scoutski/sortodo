class PagesController < ApplicationController
  before_action :authenticate

  def index

  end

  private
  def authenticate
      @current_user = User.find session[:user_id] if session[:user_id]
      redirect_to login_path unless @current_user
  end
end
