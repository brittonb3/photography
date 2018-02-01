class WelcomeController < ApplicationController
  def index
    @posts_home = Post.all.order('created_at DESC').limit(3)
  end

  def portfolio
  end

  def about
  end
end
