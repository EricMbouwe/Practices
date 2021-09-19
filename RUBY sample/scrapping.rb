require "selenium-webdriver"

driver = Selenium::WebDriver.for :chrome
driver.navigate.to "https://google.com"
driver.manage.window.maximize

element = driver.find_element(name: 'q')
element.send_keys "Hello WebDriver!"
element.submit

puts driver.title
n = 100

for i in 1..n
    sleep(1)
    p "sleeping since #{i} seconds..."
end
driver.quit