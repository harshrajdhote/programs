import petl as etl, psycopg2 as pg, sys
from sqlalchemy import *

reload(sys)
sys.setdefaultencoding('utf8')

dbCnxns = {'operations':'dbname=operations user=etl host=127.0.0.1',
'python':'dbname=python user=etl host=127.0.0.1',
'production':'dbname=production user=etl host=127.0.0.1'}

sourceConn = pg.connect(dbCnxns['operations']) 
targetConn = pg.connect(dbCnxns['python']) 
sourceCursor = sourceConn.cursor()
targetCursor = targetConn.cursor()

sourceCursor.execute("""select table_name from information_schema.columns where 
table_name in ('orders','returns') group by 1""")
sourceTables = sourceCursor.fetchall()

for t in sourceTables:
    targetCursor.execute("drop table if exists %s" % (t[0]))
    sourceDs = etl.fromdb(sourceConn, 'select * from %s' % (t[0]))
    etl.todb(sourceDs, targetConn, t[0], create=True, sample=10000)

