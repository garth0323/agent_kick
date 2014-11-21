class Campaign < ActiveRecord::Migration
  def change
    create_table(:campaigns) do |t|
      t.string :name
      t.datetime :start_date
      t.datetime :end_date
      t.float :raised
      t.float :goal
      t.text :description
      t.string :sport

      t.timestamps
    end
  end
end
