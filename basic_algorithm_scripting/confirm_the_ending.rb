# https://www.freecodecamp.org/challenges/confirm-the-ending
# Check if a string (first argument, str) ends with the given target string (second argument, target).
# 
# This challenge can be solved with the .endsWith() method, which was introduced in ES2015. But for the purpose of this challenge, we would like you to use one of the JavaScript substring methods instead.
# 
# Remember to use Read-Search-Ask if you get stuck. Write your own code.
# 
# Here are some helpful links:
# 
# String.prototype.substr()
# String.prototype.substring()

def confirmEnding(str, target)
	result = false
	(0..str.length).each do |str_index|
		if( str[str_index, (str.length)] == target)
			result = true	
		end
	end	
	result
end

my_str = "Calvin Settachatgul"

p confirmEnding("Bastian", "n") ;

