third(obj1, obj2) {
					if (Object.keys(obj1).length != Object.keys(obj2).length) {
						return false
					} else {
						for (key in obj1) {
							if (obj2.hasOwnProperty(key)) {
								if(typeof obj1[key]!== typeof obj2[key]){
									return false
								}else{
									if(typeof obj1[key] === 'object'){
										if(!this.third(obj1[key],obj2[key])){
											return false
										}
									}
									if (!Object.is(obj1[key], obj2[key])) {
										return false;
								}
								}
							} else {
								return false
							}
						}
						return true
					}
				}