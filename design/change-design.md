# Change handle in system
- trying to make changeA (changeId=changeA) to system
- 
| changeA exist | changeA_revoked exist | action                                                      |
|:--------------|:----------------------|:------------------------------------------------------------|
| yes           | no                    | ignore this change, return 200 with result                  |
| yes           | yes                   | ignore this change, return 200 with no result               |
| no            | yes                   | ignore this change, save changeA, return 200 with no result |
| no            | no                    | make this change, save changeA                              |
# Revoke Change handle in system
- trying to revoke changeA (changeId=changeA) to system
- when no, no, condition, if save changeA & changeA_revoke, then if another changeA get persist first, this will fail but will return 200(DataIntegrityViolationException will return 200 now),
- 
| changeA exist | changeA_revoked exist | action                                                                                                   |
|:--------------|:----------------------|:---------------------------------------------------------------------------------------------------------|
| yes           | no                    | revoke this change, save changeA_revoked  , return 200                                                   |
| yes           | yes                   | ignore this change, return 200 with no result                                                            |
| no            | yes                   | ignore this change, return 200 with no result                                                            |
| no            | no                    | do empty revoke, save changeA_revoked (not save changeA bcz concurrent issue), return 200 with no result |
